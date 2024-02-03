---
title: OData.Feed
---

# OData.Feed


## Description

OData サービスが提供する OData フィードのテーブルを返します。


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

URI <code>serviceUri</code>、ヘッダー <code>headers</code>の OData サービスが提供する OData フィードのテーブルを返します。次のオプションを制御するために、同時接続を使用するか、それとも選択可能なレコード パラメーター <code>options</code> を使用するかを指定するブール値が指定される可能性があります:     <ul>    <li><code>Query</code>: エスケープについて配慮することなしに、プログラムによってクエリ パラメーターを URL に追加します。</li>    <li> <code>Headers</code> : レコードとしてこの値を指定すると、HTTP 要求に追加のヘッダーが挿入されます。</li>    <li> <code>ExcludedFromCacheKey</code>: リストとしてこの値を指定すると、データをキャッシュするための計算からこれらの HTTP ヘッダー キーが除外されます。</li>    <li> <code>ApiKeyName</code> : ターゲット サイトが API キーへの対応を示す場合、このパラメーターを使用して URL で使用する必要があるキー パラメーター名 (値ではない) を指定できます。実際のキー値は、資格情報内に格納されます。</li>    <li> <code>Timeout</code> : この値を期間として指定することで、HTTP 要求のタイムアウトを変更します。既定の値は 600 秒です。</li>    <li> <code>EnableBatch</code> : MaxUriLength が超過した場合に OData $batch 要求を生成できるようにするか否かを設定する論理値 (True/False) です (既定値は False)。</li>    <li> <code>MaxUriLength</code> : OData サービスへ送信される、許可された URI の最大長を示す数値です。超過し、かつ EnableBatch が True の場合、OData $batch エンドポイントに対して要求が行われ、それ以外の場合は失敗になります (既定値は 2048)。</li>    <li> <code>Concurrent</code> : 論理値 (true/false) で、True に設定するとサービスに対する要求は同時に行われます。False に設定すると、要求は順次行われます。何も指定しないと、この値はサービスの AsynchronousRequestsSupported 注釈によって決まります。サービスで AsynchronousRequestsSupported がサポートされるかどうかが指定されていない場合、要求は順次行われます。</li>    <li> <code>ODataVersion</code> : この OData サービスのための OData プロトコルのバージョンを指定する数値 (3 または 4) です。指定しないと、サポート対象のすべてのバージョンが要求されます。サービス バージョンは、サービスによって返される OData-Version ヘッダーによって決定されます。</li>    <li> <code>FunctionOverloads</code> : 論理値 (True/False) で、True に設定すると、関数がインポートしたオーバーロードは別々のエントリとしてナビゲーターに表示されます。False に設定すると、関数がインポートしたオーバーロードは 1 つの Union 関数としてナビゲーターに表示されます。V3 の既定値は False です。V4 の既定値は True です。</li>    <li> <code>MoreColumns</code> : 論理値 (True/False) で、True に設定すると、"More Columns" 列がオープン型とポリモーフィック型を含む各エンティティ フィードに追加されます。これには、基本データ型で宣言されていないフィールドが含まれます。False の場合、このフィールドは存在しません。既定値は False です。</li>    <li> <code>IncludeAnnotations</code> : 名前空間修飾用語名、またはワイルドカード "\*" とともに注釈に含めるパターンのコンマ区切りの一覧。既定では、注釈は含まれません。</li>    <li> <code>IncludeMetadataAnnotations</code> : メタデータ ドキュメント要求に含める名前空間修飾用語名、またはワイルドカード "\*" とともに注釈に含めるパターンのコンマ区切りの一覧。既定では、IncludeAnnotations と同じ注釈を含めます。</li>    <li> <code>OmitValues</code> : OData サービスが応答に特定の値を書き出すのを回避することを許可します。サービスによって承認された場合には、省略されたフィールドからそれらの値を推測します。次のオプションを含みます:      <ul>        <li><code>ODataOmitValues.Nulls</code> : OData サービスが Null 値を省略するのを許可します。</li>      </ul>    </li>    <li> <code>Implementation</code> : 使用する OData コネクタの実装を指定します。有効な値は "2.0" または null です。</li>    </ul>


## Examples

### Example #1 
TripPin OData サービスに接続します。
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
