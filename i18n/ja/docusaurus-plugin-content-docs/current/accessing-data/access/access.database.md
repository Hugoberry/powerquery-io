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

Access データベース `database` の構造表示を返します。オプションのレコード パラメーター `options` を指定して、次のオプションを制御できます:

-   `CreateNavigationProperties` : 戻り値についてナビゲーション プロパティを生成するかどうかを設定する論理値 (true/false、既定値は false)。
-   `NavigationPropertyNameGenerator` : ナビゲーション プロパティの名前の作成に使用される関数。

レコード パラメーターは、\[option1 = value1, option2 = value2...\] などのように指定されます。



## Category
Accessing data
