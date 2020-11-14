## 文件

**一览**

* 指定文字编码写入文件(无BOM头)
* 指定文字编码读取文件

-

### 指定文字编码写入文件(无BOM头)

> 函数定义

~~~
'指定文字编码写入文件(无BOM头)
'
'  功能：
'    UTF8编码写入文件(无BOM头)
'    该方法需要前期绑定两个对象库
'    Microsoft ADO Ext. 6.0 for DDL and Security
'    Microsoft ActiveX Data Objects 2.7 Library
'
'  参数：
'    fileName : 要写入的文件名,完整路径
'    content : 写入内容
'    chartset : 文字编码  默认："utf-8" UTF8编码,小写
Public Function writeTextNoBom(ByVal fileName As String, ByVal content As String, Optional chartset as String = "utf-8")

    Dim stream As New ADODB.stream
    
    stream.Open
    stream.Type = adTypeText
    stream.CharSet = chartset  'UTF8编码,小写
    stream.WriteText content
   
    ' 尝试删除 UTF-8 BOM
    stream.Position = 3 '跳过 BOM
   
    Dim BinaryStream As New ADODB.stream
    BinaryStream.Type = adTypeBinary
    BinaryStream.Mode = adModeReadWrite
    BinaryStream.Open

    ' Strips BOM (前3个字节)
    stream.CopyTo BinaryStream
    stream.Flush
    stream.Close

    BinaryStream.SaveToFile fileName, adSaveCreateOverWrite
    BinaryStream.Flush
    BinaryStream.Close
End Function
~~~

### 指定文字编码读取文件

> 函数定义

~~~
'指定文字编码读取文件
'
'  功能：
'    指定文字编码读取文件
'    该方法需要前期绑定两个对象库
'    Microsoft ADO Ext. 6.0 for DDL and Security
'    Microsoft ActiveX Data Objects 2.7 Library
'
'  参数：
'    fileName : 要读取的文件名,完整路径
'    content : 写入内容
'    chartset : 文字编码  默认："utf-8" UTF8编码,小写
Public Function ReadText(ByVal fileName As String, Optional chartset as String = "utf-8") As String

    Dim stream As Object
    Set stream = CreateObject("adodb.stream")
    
    Dim s As String
    
    stream.Type = 2  '2-文本模式读取，1-二进制模式
    stream.Mode = 3  '3-读写,1-读，2-写
    stream.charset = LCase(charset)  'utf-8; Ascii; gb2312; big5; gbk; shift-jis (小写)
    
    stream.Open
    stream.LoadFromFile fileName
    
    s = stream.ReadText
    stream.Close
    
    Set stream = Nothing
    
    ReadTextWithCharset = s

End Function
~~~
