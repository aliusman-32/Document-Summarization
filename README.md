# 🧠 Document Summarization Web App

A simple yet powerful web-based application that allows users to **upload documents (PDF, TXT, DOC, DOCX)** and receive an **AI-generated summary**.   
Built for ease of use and fast interaction, this project showcases both frontend and backend integration of an NLP-powered summarization service.   

---

## 🚀 Features  
     
- 📄 Upload support for `.pdf`, `.txt`, `.doc`, `.docx` files    
- ⚡️ Real-time document summarization using a backend API     
- 🎯 Clean and responsive UI with **Tailwind CSS**     
- 🛡️ Error handling for upload failures and empty input     
- 📦 Easy deployment-ready structure for any cloud or local server   
     
---   
   
## 🧩 Project Structure   
    
### 🔹 Frontend   
- `index.html`:    
  A responsive and minimal HTML5 interface that uses TailwindCSS for modern styling. It features:   
  - File upload field with validation     
  - Submit button to trigger summarization     
  - Summary display box after processing   

- `index.js`:    
  JavaScript code that:  
  - Handles the file upload via a POST request to the backend    
  - Displays the returned summary dynamically without page reload     
  - Implements basic error handling using async/await   
    
### 🔹 Backend   
- `backend.ipynb`:     
  Jupyter notebook containing the backend logic (likely using **Python**, **FastAPI**, or another lightweight server) that:   
  - Accepts uploaded files    
  - Extracts text from supported formats     
  - Applies a text summarization model (e.g., from `transformers`, `spaCy`, or custom ML/NLP logic)    
  - Returns a concise summary to the frontend   
    
---    
   
## 🛠️ Technologies Used                  
    
| Layer      | Tools / Libraries                       |   
|------------|-----------------------------------------|   
| Frontend   | HTML5, JavaScript, TailwindCSS          |  
| Backend    | Python, Jupyter Notebook, NLP (e.g. Hugging Face Transformers or spaCy) |   
| Deployment | Ngrok (used temporarily for testing API endpoint) |   
   
---  
   
## 🌐 How It Works   
   
1. User selects a document and clicks "Upload & Summarize".       
2. The frontend sends the file to the backend endpoint (`/upload`) using `fetch` and `FormData`.       
3. The backend reads the file, extracts the content, and summarizes it.      
4. The summary is returned and displayed in the browser dynamically.             
                
---                
              
## 📌 Use Cases         
                
- Academic reading and paper summarization          
- Legal document review             
- Meeting minutes compression               
- Quick understanding of lengthy reports           
           
---             
               
## 📎 Example Screenshot             
<img width="1904" height="866" alt="screenshot" src="https://github.com/user-attachments/assets/3e343901-526b-4ce2-8137-d2a186fe7cf0" />    
    
---

## 👨‍💻 Author   
    
**Ali Usman**    
https://github.com/aliusman-32   
   
---  
   
## 📄 License   
   
This project is open-source and available under the MIT License.   

