@echo off
title NexStore - Push to GitHub
cd /d "%~dp0"

echo ==========================================
echo       NexStore User Website
echo       GitHub Auto Push
echo ==========================================
echo.

echo [1/4] Checking Git status...
git status
echo.

echo [2/4] Adding changes...
git add .
echo.

echo [3/4] Creating commit...
git commit -m "Update NexStore User Website"
echo.

echo [4/4] Pushing to GitHub...
git push
echo.

if %errorlevel% equ 0 (
    echo ==========================================
    echo       PUSH SUCCESSFUL!
    echo ==========================================
) else (
    echo ==========================================
    echo       PUSH FAILED!
    echo       Check the error above.
    echo ==========================================
)

echo.
pause