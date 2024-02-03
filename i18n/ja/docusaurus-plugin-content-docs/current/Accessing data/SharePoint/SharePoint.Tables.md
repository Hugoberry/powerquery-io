---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

SharePoint リストのコンテンツを含むテーブルを返します。


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

指定された SharePoint リスト <code>url</code> で見つかったリスト項目ごとに 1 行を格納するテーブルを返します。各行には、リストのプロパティが含まれます。<code>options</code> を指定して、次のオプションを制御できます。    <ul><li><code>ApiVersion</code> : 数値 (14 または 15) またはテキスト &quot;Auto&quot; でこのサイトに使用する SharePoint API のバージョンを指定します。指定しない場合は 14 が使用されます。Auto が指定されている場合、サーバー バージョンは自動的に検出されます (可能な場合)。検出できない場合は、バージョン 14 が既定で使用されます。英語以外の SharePoint サイトには、バージョン 15 以降が必要です。</li><li><code>Implementation</code> : オプションです。使用する SharePoint コネクタのバージョンを指定します。使用できる値は &quot;2.0&quot; または null です。値が &quot;2.0&quot; の場合は、SharePoint コネクタの 2.0 実装が使用されます。値が null の場合は、SharePoint コネクタの元の実装が使用されます。</li><li><code>ViewMode</code> : オプションです。このオプションは、実装 2.0 でのみ有効です。使用できる値は &quot;All&quot; と &quot;Default&quot; です。値が指定されていない場合、値は &quot;All&quot; に設定されます。&quot;All&quot; を指定すると、ビューには、ユーザーが作成したすべての列とシステム定義の列が含まれます。&quot;Default&quot; を指定すると、ユーザーがオンラインでリストを見るときに、ユーザーが設定で既定に設定したビューで見たものと同じビューが表示されます。ユーザーが既定のビューを編集して、ユーザーが作成した列またはシステム定義の列を追加または削除した場合、または新しいビューを作成して既定として設定すると、これらの変更がコネクタ全体に反映されます。</li><li><code>DisableAppendNoteColumns</code> : コネクタがメモの列に個別のエンドポイントを使用できないようにします。</li></ul>    



## Category
Accessing data
