---
title: WebAction.Request
---

# WebAction.Request


実行時にバイナリ値として HTTP 要求の実行の結果を返すアクションを作成します。


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

実行時に、HTTP をバイナリ値として使用して、`url` に対する `method` 要求の実行結果を返すアクションを作成します。 省略可能な record パラメーター `options` を指定して、追加のプロパティを指定できます。レコードには、次のフィールドを含めることができます:

-   `Query` : エスケープを気にせずに、URL にクエリ パラメーターをプログラムで追加します。
-   `ApiKeyName` : ターゲット サイトに API キーの表記がある場合は、このパラメーターを使用して、URL で使用する必要のあるキー パラメーターの名前 (値ではなく) を指定できます。実際のキー値は資格情報で提供されます。
-   `Headers` : この値をレコードとして指定すると、HTTP 要求に追加ヘッダーが提供されます。
-   `Timeout` : この値を期間として指定すると、HTTP 要求のタイムアウトが変更されます。既定値は 100 秒です。
-   `ExcludedFromCacheKey` : この値を一覧として指定すると、これらの HTTP ヘッダー キーが、データをキャッシュするための計算から除外されます。
-   `IsRetry` : この論理値を true に指定すると、データをフェッチするときに、キャッシュ内の既存の応答が無視されます。
-   `ManualStatusHandling` : この値を一覧として指定すると、応答にこれらの状態コードのいずれかが含まれる HTTP 要求で、組み込み処理が回避されます。
-   `RelativePath` : この値をテキストとして指定すると、要求を作成する前にベース URL に追加されます。
-   `Content` : この値を指定すると、そのコンテンツが HTTP 要求の本文になります。

この機能はほとんどのコンテキストで無効になっていることに注意してください。代わりに、Web.Contents または Web.Headers を使用することを検討してください。


## Examples

### Example #1
Bing に対して GET 要求を実行します。
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
