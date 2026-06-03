---
title: DateTime.LocalNow
---

# DateTime.LocalNow


ローカル タイム ゾーンでの現在の日付と時刻を返します。


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

システム上の現在の日時に設定された `datetime` 値を返します。  
  
この関数によって返される値は、ローカル コンピューターまたはオンラインのどちらでクエリを実行しているかによって異なります。たとえば、米国太平洋タイム ゾーンにあるシステムでクエリを実行した場合、Power Query Desktop はローカル コンピューターで設定された日時を返します。ただし、クラウドでクエリを実行すると、Power Query Online は、クラウド仮想マシンで設定された時刻を読み取っているため、UTC 時刻を返します。これはすべて UTC に設定されています。


## Examples

### Example #1
デスクトップを実行しているローカル コンピューターでこの関数Power Query呼び出します。
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Power Query Online を実行しているクラウドでこの関数を呼び出します。
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
