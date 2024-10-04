@echo off

rem Prompt user for radius
set /p radius=Enter the radius of the circle:

rem Call VBScript for calculation
cscript //nologo circle_area.vbs %radius% > outputBatch
SET /p MYVAR=<outputBatch

rem Call Python script with the radius as an argument
python circle_area.py %radius%

rem Display the result
echo The area of the circle is: %MYVAR%

pause

DEL outputBatch
