@echo off
set "s=                                           AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
for /l %%i in (1,1,40) do (
   call,echo,%%s:~%%i,%%i%%
)
pause