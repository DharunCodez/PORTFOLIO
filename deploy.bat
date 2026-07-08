@echo off
setlocal

echo Installing dependencies...
call npm install
if errorlevel 1 exit /b %errorlevel%

echo Building production bundle...
call npm run build
if errorlevel 1 exit /b %errorlevel%

echo Build completed successfully.
