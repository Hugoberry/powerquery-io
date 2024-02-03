---
title: Smartsheet.Tables
---

# Smartsheet.Tables


## Description

从 Smartsheet API 返回包含工作表、报表、文件夹和工作区的表


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Details

从 Smartsheet API 返回包含可用的工作表、报表、文件夹和工作区的嵌套表。


## Examples

### Example #1 
返回 Smartsheet 层次结构中的顶级工作表、文件夹、报表和工作区
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
包含 Smartsheet 层次结构中顶级文件夹、报表和工作区的表
```



