from fastapi import FastAPI
from pydantic import BaseModel
import subprocess
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # або ["http://127.0.0.1:5500"] якщо відкриваєш через Live Server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserMessage(BaseModel):
    message: str

def ask_ollama(prompt):
    result = subprocess.run(["ollama", "run", "mistral", prompt], capture_output=True, text=True)
    return result.stdout.strip()

@app.post("/chat")
async def chat(user_message: UserMessage):
    response = ask_ollama(user_message.message)
    return {"response": response}

@app.get("/chat")
async def chat_get():
    return {"message": "This is a GET response"}


# uvicorn server:app --reload

