# meteor-cursor-limit-remove

On a query using sort+limit, since minimongo inserts aren't batched, each
insert will result in a new template being created+destroyed even if it
will never be rendered.

A different issue though is that the bigger the list the longer it can
take to complete the create/destroy lifecycle.

## Sample output

```
lifetime of b00400 was 14ms, previous diff was 0ms
lifetime of b00370 was 48ms, previous diff was 3ms
lifetime of b00303 was 54ms, previous diff was 17ms
lifetime of b00272 was 60ms, previous diff was 26ms
lifetime of b00222 was 68ms, previous diff was 40ms
lifetime of b00220 was 76ms, previous diff was 43ms
lifetime of b00205 was 91ms, previous diff was 43ms
lifetime of b00174 was 113ms, previous diff was 80ms
lifetime of b00127 was 139ms, previous diff was 100ms
lifetime of b00044 was 193ms, previous diff was 136ms
lifetime of b00003 was 402ms, previous diff was 190ms
render apple
total time: 26335ms
```