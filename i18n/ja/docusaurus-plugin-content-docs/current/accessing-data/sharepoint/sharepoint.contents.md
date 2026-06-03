---
title: SharePoint.Contents
---

# SharePoint.Contents


SharePoint サイトのコンテンツを含むテーブルを返します。


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

指定された SharePoint サイト `url` で見つかったフォルダーとドキュメントごとに 1 行を格納するテーブルを返します。各行には、フォルダーまたはファイルのプロパティと、そのコンテンツへのリンクが含まれます。`options` を指定して、次のオプションを制御できます。

-   `ApiVersion` : 数値 (14 または 15) またはテキスト "Auto" でこのサイトに使用する SharePoint API のバージョンを指定します。指定しない場合は 14 が使用されます。Auto が指定されている場合、サーバー バージョンは自動的に検出されます (可能な場合)。検出できない場合は、バージョン 14 が既定で使用されます。英語以外の SharePoint サイトには、バージョン 15 以降が必要です。
-   `Implementation` : オプションです。使用する SharePoint コネクタのバージョンを指定します。使用できる値は "2.0" または null です。値が "2.0" の場合は、SharePoint コネクタの 2.0 実装が使用されます。値が null の場合は、SharePoint コネクタの元の実装が使用されます。



## Category
Accessing data
