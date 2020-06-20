## Windows API

**一览**

* 关闭Excel进程

-

### 关闭Excel进程

> 函数定义

~~~
'关闭Excel进程
'API声明
Private Declare Function PostMessage _
    Lib "user32.dll" _
    Alias "PostMessageA" ( _
        ByVal hWnd As Long, _
         ByVal wMsg As Long, _
         ByVal wParam As Long, _
         ByVal lParam As Long) _
As Long
Private Const WM_CLOSE = &H10

'关闭Excel进程
'
'  功能：
'    Excel进程中只有当前文件时，关闭当前文件后，关闭Excel进程
Private Sub Workbook_BeforeClose(Cancel As Boolean)
    If Application.Workbooks.Count = 1 Then
        Call PostMessage(Application.hWnd, WM_CLOSE, 0, 0)
    End If
End Sub
~~~
    