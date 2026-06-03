---
title: Web.Contents
---

# Web.Contents


バイナリとして url からダウンロードされたコンテンツを返します。


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

`url` からダウンロードされたコンテンツをバイナリとして返します。省略可能な record パラメーター `options` を設定して、追加のプロパティを指定できます。レコードには、次のフィールドを含めることができます:

-   `Query` : エスケープを気にせずに、URL にクエリ パラメーターをプログラムで追加します。
-   `ApiKeyName` : ターゲット サイトに API キーの表記がある場合は、このパラメーターを使用して、URL で使用する必要のあるキー パラメーターの名前 (値ではなく) を指定できます。実際のキー値は資格情報で提供されます。
-   `Headers` : この値をレコードとして指定すると、HTTP 要求に追加ヘッダーが提供されます。
-   `Timeout` : この値を期間として指定すると、HTTP 要求のタイムアウトが変更されます。既定値は 100 秒です。
-   `ExcludedFromCacheKey` : この値を一覧として指定すると、これらの HTTP ヘッダー キーが、データをキャッシュするための計算から除外されます。
-   `IsRetry` : この論理値を true に指定すると、データをフェッチするときに、キャッシュ内の既存の応答が無視されます。
-   `ManualStatusHandling` : この値を一覧として指定すると、応答にこれらの状態コードのいずれかが含まれる HTTP 要求で、組み込み処理が回避されます。
-   `RelativePath` : この値をテキストとして指定すると、要求を作成する前にベース URL に追加されます。
-   `Content` : この値を指定すると、そのオプションの値が POST のコンテンツとして使用されて、Web 要求が GET から POST へ変更されます。

HTTP 要求は、GET (Content が指定されていない場合) または POST (Content がある場合) として行われます。POST 要求は匿名でのみ行うことができます。  
  
HTTP 応答のヘッダーは、バイナリ結果のメタデータとして使用できます。カスタム データ コネクタ コンテキストの外部では、(セキュリティ上の理由から) 応答ヘッダーのサブセットのみが使用できます。


## Examples

### Example #1
RelativePath オプションとクエリ オプションを使用して、 `"https://bing.com/search?q=Power+Query"` のコンテンツを取得します。これらのオプションを使用して、静的ベースの URL を動的にクエリできます。
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
バイナリ JSON ペイロードを渡して、応答を JSON として解析し、URL に対して POST を実行します。
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
クエリ文字列の一部として認証キーを受け入れる安全な URL に接続します。キーは、M で秘密キーをハードコーディングする代わりに (セキュリティ 上のリスクをもたらす)、 M で名前 (値ではなく) を指定して、Web API 認証を選択し、Web API 資格情報の一部としてキーの値を入力することで、安全に提供できます。 この方法で使用すると、次の例では、`"https://contoso.com/api/customers/get?api_key=******"` への要求が生成されます。
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
