---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


データ型を含め、Common Data Model のエンティティの属性にマッピングされた列を含むテーブルを返します。


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Remarks

データ型を含め、Common Data Model のエンティティの属性にマッピングされた列を含むテーブルを返します。マッピングされていない場合はエンティティ定義からの列が追加され、マッピングされていない列はすべて削除されます。


