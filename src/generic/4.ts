/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor (public props: T) {
  }
}
interface UserProps {
  title: string
}


class Page extends Component<UserProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};