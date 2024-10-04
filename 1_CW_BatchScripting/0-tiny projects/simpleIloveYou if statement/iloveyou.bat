:: love script


@echo off


:1
echo.
echo ____________Love______________
echo.

color a
echo Hello, do you love me? (answer in only yes / no )
set /p input=
if /i %input%==yes goto love
if /i %input%==no goto hate
if /i not %input%==yes,no goto 1


:love
cls
color c1
echo I love you too ...
echo See You later
pause
exit


:hate
cls
echo But I love You ... lol
echo You just got Hacked!
color e8
timeout 3
:: shutdown -s -t 100
