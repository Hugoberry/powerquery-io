---
title: List.InsertRange
---

# List.InsertRange


Chèn các giá trị vào danh sách tại chỉ mục cho sẵn.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Trả về một danh sách mới được tạo bằng cách chèn các giá trị trong <code>values</code> vào <code>list</code> tại <code>index</code>. Vị trí đầu tiên trong danh sách là tại chỉ mục 0.      <ul>        <li><code>list</code>: Danh sách mục tiêu nơi các giá trị sẽ được chèn.</li>        <li><code>index</code>: Chỉ mục của danh sách mục tiêu(<code>list</code>) nơi các giá trị sẽ được chèn. Vị trí đầu tiên trong danh sách là tại chỉ mục 0.</li>        <li><code>values</code>: Danh sách các giá trị sẽ được chèn vào <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Chèn danh sách (\{3, 4}) vào danh sách mục tiêu (\{1, 2, 5}) tại chỉ mục 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2 
Chèn một danh sách bằng một danh sách lồng nhau (\{1, \{1.1, 1.2}}) vào một danh sách đích (\{2, 3, 4}) tại chỉ mục 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
