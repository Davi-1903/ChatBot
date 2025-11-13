import os
from dotenv import load_dotenv
import google.generativeai as genai


load_dotenv()

API_KEY = os.environ.get('API_KEY')
if API_KEY is None or API_KEY == '':
    raise ValueError('API_KEY environment variable is not set or is empty.')

genai.configure(api_key=API_KEY) # type: ignore
model = genai.GenerativeModel('gemini-2.0-flash') # type: ignore
chat = model.start_chat()