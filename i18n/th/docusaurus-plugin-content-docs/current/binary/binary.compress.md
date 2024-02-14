---
title: Binary.Compress
---

# Binary.Compress


บีบอัดค่าไบนารีโดยใช้ชนิดการบีบอัดที่กำหนดไว้


## Syntax

```powerquery
Binary.Compress(
    binary as binary,
    compressionType as Compression.Type
) as binary
```


## Remarks

บีบอัดค่าไบนารีโดยใช้ชนิดการบีบอัดที่กำหนดไว้  ผลลัพธ์ของการเรียกใช้นี้คือ สำเนาการป้อนค่าที่ถูกบีบอัดแล้ว ชนิดการบีบอัดประกอบด้วย:  <ul>        <li><code>Compression.GZip</code></li>        <li><code>Compression.Deflate</code></li>      </ul>


## Examples

### Example #1 
บีบอัดค่าไบนารี
```powerquery
Binary.Compress(Binary.FromList(List.Repeat({10}, 1000)), Compression.Deflate)
```

Result: 
```powerquery
#binary({227, 226, 26, 5, 163, 96, 20, 12, 119, 0, 0})
```




## Category
Binary
