---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

지정한 <code>delimiter</code> 이후의 <code>text</code> 부분을 반환합니다.    선택적 숫자 <code>index</code>은(는) 고려해야 하는 <code>delimiter</code>을(를) 나타냅니다.    선택적 목록 <code>index</code>은(는) 고려해야 하는 <code>delimiter</code>과(와) 인덱싱을 입력의 처음부터 실행해야 하는지, 아니면 끝부터 실행해야 하는지를 나타냅니다.


## Examples

### Example #1 
(첫 번째) 하이픈 이후의 &#34;111-222-333&#34; 부분을 가져옵니다.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
두 번째 하이픈 이후의 &#34;111-222-333&#34; 부분을 가져옵니다.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
끝에서 두 번째 하이픈 이후의 &#34;111-222-333&#34; 부분을 가져옵니다.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
