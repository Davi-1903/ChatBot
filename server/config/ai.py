import os
from dotenv import load_dotenv
import google.generativeai as genai


load_dotenv()

API_KEY = os.environ.get('API_KEY')
if API_KEY is None or API_KEY == '':
    raise ValueError('A variável de ambiente "API_KEY" não está definida.')

genai.configure(api_key=API_KEY) # type: ignore
model = genai.GenerativeModel('gemini-2.0-flash') # type: ignore
chat = model.start_chat()