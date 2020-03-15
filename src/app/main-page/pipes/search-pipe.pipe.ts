import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(tasks, searchValue: string): [] {
    if (!searchValue.trim()) {
      return tasks
    }
    return tasks.filter(task => {
      return task.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
    })
  }

}
