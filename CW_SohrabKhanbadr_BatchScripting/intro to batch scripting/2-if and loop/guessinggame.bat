@echo off

rem Set the secret number
set /a secretNumber=10

:start
cls

echo Guess a number between 1 and 20:
set /p guess=

rem Check if the guess is correct
if %guess%==%secretNumber% (
  echo You guessed it! Congratulations!
  goto end
)

if %guess% gtr %secretNumber% (
  echo Your guess is too high. Try again.
  pause
  goto start
)

if %guess% lss %secretNumber% (
  echo Your guess is too low. Try again.
  pause
  goto start
)

:end
pause
