@echo off
:: Server Shutdown Script
for /f "tokens=5" %%p in ('netstat -ano ^| find "LISTENING" ^| find "3003"') do taskkill /F /PID %%p
exit /b 0