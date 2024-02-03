---
title: List.Alternate
---

# List.Alternate


## Description

傳回由清單中所有奇數位移項目所組成的清單。


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

傳回由清單中所有奇數位移項目所組成的清單。根據參數，交替接受和略過清單 <code>list</code> 中的值。    <ul>    <li><code>count</code>: 指定每次略過的值數目。</li>    <li><code>repeatInterval</code>: 選擇性的重複間隔可指出要在略過的值之間加入多少值。</li>    <li><code>offset</code>: 選擇性的位移參數可開始略過開頭位移處的值。</li>    </ul>


## Examples

### Example #1 
根據 \{1..10} 建立清單，且略過第一個數字。
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
根據 \{1..10} 建立清單，且略過每隔一個數字。
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
根據 \{1..10} 建立清單，從 1 開始並略過每隔一個數字。
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
根據 \{1..10} 建立清單，從 1 開始、略過一個值、保留兩個值，依此類推。
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
