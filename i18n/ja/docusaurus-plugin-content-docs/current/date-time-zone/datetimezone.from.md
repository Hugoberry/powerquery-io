---
title: DateTimeZone.From
---

# DateTimeZone.From


指定された値から datetimezone を作成します。


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

指定した値から `datetimezone` を作成します。

-   `value`: `datetimezone` の作成に使用された値です。
-   `culture`: (オプション) 値を変換するときに使用するカルチャ (例: "en-US")。

以下の型の値は、`datetimezone` 値に変換できます。

-   `text`: テキスト表現から `datetimezone` 値を返します。詳細については、`DateTimeZone.FromText` を参照してください。
-   `date`: `datetimezone` と `value` を日付コンポーネントとして、`12:00:00:00 AM` を時間コンポーネントとして返し、さらにローカル タイム ゾーンに対応するオフセットを返します。
-   `datetime`: `datetimezone` と `value` を日付として返し、さらにローカル タイム ゾーンに対応するオフセットを返します。
-   `datetimezone`: `value`を返します。
-   `time`: `datetimezone` を OLE オートメーション日付 `0` に相当する日付とともに日付コンポーネントとして返し、時間コンポーネントとして `value` を返し、さらにローカル タイム ゾーンに対応するオフセットを返します。OLE オートメーション日付は、浮動小数点の数値で構成されます。ここで整数部は 1899 年 12 月 30 日の午前 0 時以前または以降の日数を表し、小数部はその日の時刻を 24 で割った値を表します。たとえば、1899 年 12 月 31 日の午前 0 時は 1.0、1900 年 1 月 1 日の午前 6 時は 2.25、1899 年 12 月 29 日の午前 0 時は -1.0、1899 年 12 月 29 日の午前 6 時は -1.25 で表されます。基準とされる値は 1899 年 12 月 30 日の午前 0 時です。最小値は 0100 年 1 月 1 日の午前 0 時です。最大値は 9999 年 12 月 31 日の最後の瞬間です。
-   `number`: `datetimezone` を `value` で表される OLE オートメーション日付に相当する日時とともに返し、さらにローカル タイム ゾーンに対応するオフセットを返します。
-   `null`: `null` を返します。

`value` が他の型の場合は、エラーが返されます。  
  
この関数をローカルで実行する場合とオンラインで実行する場合とでは、ローカル タイム ゾーンに対応するオフセットの値が異なります。ローカルで実行する場合は、ローカルのタイム ゾーンが返されます。オンラインで実行する場合には、UTC タイム ゾーン (+00:00) が返されます。


## Examples

### Example #1
日付、時刻、およびタイムゾーンのテキスト形式を `datetimezone` 値に変換します。
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
ポルトガル語 (ブラジル) の日付、時刻、タイムゾーンのテキスト形式を `datetimezone` 値に変換します。
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
2025 年 1 月 1 日午後 12 時を表す数値を、`datetimezone` 値に変換します。結果のタイムゾーンは、この例がローカルで実行されるかオンラインで実行されるかによって異なります。
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
