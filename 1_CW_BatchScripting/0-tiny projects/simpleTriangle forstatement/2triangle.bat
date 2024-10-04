@echo off
setlocal EnableDelayedExpansion

set "rows=17"

set "spaces="
for /L %%i in (1,1,%rows%) do set "spaces=!spaces! "
set "letters=A"

for /L %%i in (1,1,%rows%) do (
   echo !spaces!!letters!
   set "spaces=!spaces:~1!"
   set "letters=!letters!AA!
)

pause