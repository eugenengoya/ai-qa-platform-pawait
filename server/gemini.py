import os

from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv()

client = genai.Client(api_key=os.getenv('GEMINI_API_KEY'))

def generate_response(query):
    response = client.models.generate_content(
        model='gemini-2.0-flash', contents=query
    )
    return {"response": response.text}