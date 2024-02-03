---
title: WebAction.Request
---

# WebAction.Request


## Description

実行時にバイナリ値として HTTP 要求の実行の結果を返すアクションを作成します。


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

実行時に、バイナリ値として HTTP を使用して <code>url</code> に対する <code>method</code> 要求の実行結果を返すアクションを作成します。    追加のプロパティを指定するために、省略可能なレコード パラメーター <code>options</code> を指定できます。レコードには次のフィールドを含めることができます:    <ul><li><code>Query</code> : エスケープを気にせずに、URL にクエリ パラメーターをプログラムで追加します。</li><li><code>ApiKeyName</code> : ターゲット サイトに API キーの表記がある場合は、このパラメーターを使用して、URL で使用する必要のあるキー パラメーターの名前 (値ではなく) を指定できます。実際のキー値は資格情報で提供されます。</li><li><code>Headers</code> : この値をレコードとして指定すると、HTTP 要求に追加ヘッダーが提供されます。</li><li><code>Timeout</code> : この値を期間として指定すると、HTTP 要求のタイムアウトが変更されます。既定値は 100 秒です。</li><li><code>ExcludedFromCacheKey</code> : この値を一覧として指定すると、これらの HTTP ヘッダー キーが、データをキャッシュするための計算から除外されます。</li><li><code>IsRetry</code> : この論理値を true に指定すると、データをフェッチするときに、キャッシュ内の既存の応答が無視されます。</li><li><code>ManualStatusHandling</code> : この値を一覧として指定すると、応答にこれらの状態コードのいずれかが含まれる HTTP 要求で、組み込み処理が回避されます。</li><li><code>RelativePath</code> : この値をテキストとして指定すると、要求を作成する前にベース URL に追加されます。</li><li><code>Content</code> : この値を指定すると、そのコンテンツが HTTP 要求の本文になります。</li></ul>    <br />    この機能はほとんどのコンテキストで無効になっていることに注意してください。代わりに、Web.Contents の使用を検討してください。


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
