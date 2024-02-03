---
title: Web.Headers
---

# Web.Headers


## Description

URL からダウンロードされた HTTP ヘッダーをレコード値として返します。


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

<code>url</code>からダウンロードされたヘッダーをレコードとして返します。省略可能なレコード パラメーター <code>options</code> を指定して、追加のプロパティを指定できます。レコードには次のフィールドを含めることができます:    <ul><li><code>Query</code> : エスケープを気にせずに、URL にクエリ パラメーターをプログラムで追加します。</li><li><code>ApiKeyName</code> : ターゲット サイトに API キーの表記がある場合は、このパラメーターを使用して、URL で使用する必要のあるキー パラメーターの名前 (値ではなく) を指定できます。実際のキー値は資格情報で提供されます。</li><li><code>Headers</code> : この値をレコードとして指定すると、HTTP 要求に追加ヘッダーが提供されます。</li><li><code>Timeout</code> : この値を期間として指定すると、HTTP 要求のタイムアウトが変更されます。既定値は 100 秒です。</li><li><code>ExcludedFromCacheKey</code> : この値を一覧として指定すると、これらの HTTP ヘッダー キーが、データをキャッシュするための計算から除外されます。</li><li><code>IsRetry</code> : この論理値を true に指定すると、データをフェッチするときに、キャッシュ内の既存の応答が無視されます。</li><li><code>ManualStatusHandling</code> : この値を一覧として指定すると、応答にこれらの状態コードのいずれかが含まれる HTTP 要求で、組み込み処理が回避されます。</li><li><code>RelativePath</code> : この値をテキストとして指定すると、要求を作成する前にベース URL に追加されます。</li></ul>    HTTP 要求は HEAD メソッドを使用して行われます。カスタム データ コネクタ コンテキストの外部では、(セキュリティ上の理由から) 応答ヘッダーのサブセットのみが使用できます。    


## Examples

### Example #1 
RelativePath オプションと Query オプションを使用して、 &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; の HTTP ヘッダーを取得します。
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
