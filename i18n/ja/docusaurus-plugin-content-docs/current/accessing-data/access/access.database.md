---
title: Access.Database
---

# Access.Database


Access データベースの構造的な表現を返します。


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Access データベース <code>database</code> の構造表示を返します。省略可能なレコード パラメーター <code>options</code> を指定して、次のオプションを制御できます。    <ul><li><code>CreateNavigationProperties</code> : 戻り値についてナビゲーション プロパティを生成するかどうかを設定する論理値 (true/false、既定値は false)。</li><li><code>NavigationPropertyNameGenerator</code> : ナビゲーション プロパティの名前の作成に使用される関数。</li></ul>    レコード パラメーターは、[option1 = value1, option2 = value2...] などのように指定されます。



## Category
Accessing data
