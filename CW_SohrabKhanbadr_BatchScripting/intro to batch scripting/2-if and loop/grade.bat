@echo off
rem Check the value of a variable
set /a grade=85

if %grade% GEQ 90 (
  echo Excellent!
) else if %grade% GEQ 80 (
  echo Good!
) else if %grade% GEQ 70 (
  echo Average!
) else (
  echo Fail!
)

pause