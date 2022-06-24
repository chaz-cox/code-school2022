import eel

eel.init('web')

@eel.expose #expose to javascript
def hello_py(text):
    print("Hello python, this is "+str(text))
    return "Hello python, this is "+str(text)

hello_py('python')
eel.hello_js('python') #call javascript function 

eel.start('index.html') #opens index.html

