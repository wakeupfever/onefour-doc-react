import React, { Component, ComponentType } from 'react'

function asyncComponent<T>(importComponent: () => Promise<{ default: ComponentType<T> }>) {
  return class extends Component<T> {
    state: { component: ComponentType<T> | null }
    constructor(props: T) {
      super(props)
      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent()
      this.setState(component)
    }

    render () {
      const C = this.state.component
      return C ? <C {...this.props} /> : null
    }
  }
}

export default asyncComponent