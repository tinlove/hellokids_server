@echo off
for /f "tokens=5" %%p in ('netstat -ano ^| find "LISTENING" ^| find "3003"') do taskkill /F /PID %%p