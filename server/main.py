from fastapi import APIRouter, FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from gemini import generate_response

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

router = APIRouter(prefix="/api")

@router.post("/prompt")
async def prompt(request: Request): 
    body = await request.json()
    user_prompt = body.get("prompt")
    response = generate_response(user_prompt)
    return {"response": response}

app.include_router(router)
