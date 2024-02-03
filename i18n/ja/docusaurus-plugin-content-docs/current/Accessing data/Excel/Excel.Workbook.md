---
title: Excel.Workbook
---

# Excel.Workbook


## Description

Excel ブックの内容を返します。


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Details

Excel ブックのコンテンツを返します。    <ul>     <li><code>useHeaders</code> は null か、返される各テーブルの先頭行をヘッダーまたはオプション レコードとして扱うかどうかを示す論理 (true/false) 値にできます。既定値: false。</li>     <li><code>delayTypes</code> は null か、または返される各テーブルの列を型指定しないままにしておくかどうかを示す論理 (true/false) 値です。既定値: false。</li>    </ul>    <code>useHeaders</code> でレコードが指定されている (そして <code>delayTypes</code> が null ) の場合、次のレコード フィールドが提供されている可能性があります:    <ul>     <li> <code>UseHeaders</code>: null か、または返される各テーブルの先頭行をヘッダーとして扱うかどうかを示す論理 (true/false) 値にできます。既定値: false。</li>     <li> <code>DelayTypes</code>: null か、または返される各テーブルの列を型指定しないでおくかどうかを示す論理 (true/false) 値にできます。既定値: false。</li>     <li> <code>InferSheetDimensions</code>: null か、またはデータを含むワークシートの領域を (ファイルからディメンションのメタデータを読み取るのではなく) ワークシート自体を読み取ることによって推論する必要があるかどうかを示す論理 (true/false) 値にできます。これは、ディメンションのメタデータが正しくない場合に役立ちます。このオプションは、従来の Excel ファイルではなく、Open XML Excel ファイルでのみサポートされているのでご注意ください。既定値: false。</li>    </ul>    


## Examples

### Example #1 
Excel ブックから Sheet1 のコンテンツを返します。
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
