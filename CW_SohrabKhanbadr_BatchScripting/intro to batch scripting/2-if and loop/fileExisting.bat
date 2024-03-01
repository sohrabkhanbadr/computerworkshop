@echo off
rem Check if a file exists
if exist "my_file.txt" (
  echo File exists!
) else (
  echo File does not exist!
)

pause
