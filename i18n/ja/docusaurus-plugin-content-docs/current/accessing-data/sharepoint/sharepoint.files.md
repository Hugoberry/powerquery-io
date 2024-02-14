---
title: SharePoint.Files
---

# SharePoint.Files


SharePoint サイトのドキュメントを含むテーブルを返します。


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

指定された SharePoint サイト <code>url</code> とサブフォルダーで見つかったドキュメントごとに 1 行を格納するテーブルを返します。各行には、フォルダーまたはファイルのプロパティと、そのコンテンツへのリンクが含まれます。<code>options</code> を指定して、次のオプションを制御できます。    <ul><li><code>ApiVersion</code> : 数値 (14 または 15) またはテキスト &quot;Auto&quot; でこのサイトに使用する SharePoint API のバージョンを指定します。指定しない場合は 14 が使用されます。Auto が指定されている場合、サーバー バージョンは自動的に検出されます (可能な場合)。検出できない場合は、バージョン 14 が既定で使用されます。英語以外の SharePoint サイトには、バージョン 15 以降が必要です。</li></ul>    



## Category
Accessing data
