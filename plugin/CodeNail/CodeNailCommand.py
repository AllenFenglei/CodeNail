import sublime, sublime_plugin
import sys
import os
import requests

# sublime window
_window = sublime.active_window()

# sublime editor view
_view = _window.active_view()
_edit = None
_results = None

def onChoose(index):
    # insert code
    _view.insert(_edit, _view.sel()[0].begin(), _results[index][3])

def onSearch(text):
    global _results
    # rest API call to server
    url = "http://localhost:3030/api/post/searchPost"
    payload = {"content": text }
    r = requests.post(url, data=payload)
    _results = [[i['title'], i['description'], i['specification'], i['code']] for i in r.json()]
    
    # display results in result pannel
    _window.show_quick_panel(_results, onChoose)


class CodeNailCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        global _edit
        _edit = edit
        # display search box
        _window.show_input_panel("CodeNail | Search", "", onSearch, None, None)
