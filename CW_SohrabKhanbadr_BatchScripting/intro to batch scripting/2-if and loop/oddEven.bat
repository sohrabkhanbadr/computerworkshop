@echo off
rem Check if a number is even
set /p num= enter number: 
set /a booleanExp= %num% %% 2

if %booleanExp%  == 0 (
  echo Number is even
) else (
  echo Number is odd
)

pause
