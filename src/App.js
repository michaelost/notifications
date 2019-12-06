import React from 'react'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { Message, Comment, Button } from 'semantic-ui-react';
import 'semantic-ui-css/components/reset.min.css';
import 'semantic-ui-css/components/site.min.css';
import 'semantic-ui-css/components/container.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/message.min.css';
import 'semantic-ui-css/components/header.min.css';
import 'semantic-ui-css/components/comment.min.css';
import 'semantic-ui-css/components/button.min.css';

const StardardToasts = () => {
  const { addToast } = useToasts()
  const onClick = () => {
    addToast('message', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
    addToast('message', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 3000 })
    addToast('message', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 3000 })
    addToast('message', { appearance: 'info', autoDismiss: true, autoDismissTimeout: 3000 })
  }
  const oneByOne = () => {
    setTimeout(() => {
      addToast('message', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
    }, 500)
    setTimeout(() => {
      addToast('message', { appearance: 'warning', autoDismiss: true, autoDismissTimeout: 3000 })
    }, 1000)
    setTimeout(() => {
      addToast('message', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 3000 })
    }, 1500)
    setTimeout(() => {
      addToast('message', { appearance: 'info', autoDismiss: true, autoDismissTimeout: 3000 })
    }, 2000)
  }
  return (
    <>
    <Button primary onClick={onClick}>4 react-toast-notifications at once </Button>
    <Button primary onClick={oneByOne}>4 react-toast-notifications one by one </Button>
    </>
  )
}

const FormWithToasts = () => {
  const { addToast } = useToasts()
  const onClick = () => addToast('message', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 3000 })
  return <Button primary onClick={onClick}>autodismissable semantic ui notification  </Button>
}

const FormWithDismissableToasts = () => {
  const { addToast } = useToasts()
  const onSubmit = async value => addToast('Saved Successfully', { appearance: 'success', autoDismiss: false })
  return <Button primary onClick={onSubmit}>dismissable semantic ui notification </Button>
}

const MyCustomToast = ({ appearance, dismissable, children, ...props }) => {
  return (
    <Message>
      <Message.Header>Absolutely custom Semantic Message</Message.Header>
      <p>
        We updated our privacy policy here to better service our customers. We recommend reviewing the changes.
        <div>
          <button onClick={() => {alert('clicked')}}>custom button </button>
        </div>
      </p>
   </Message>
  )
}

const DismissableToast = ({ appearance, dismissable, children, onDismiss, ...props }) => (
  <Message onDismiss={() => { onDismiss()}}>
    <Message.Header>Absolutely custom Message</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We
      <Button onClick={() => {alert('clicked')}}>custom button</Button>
    </p>
  </Message>
);

const AnimatedToasts = () => {
  const { addToast } = useToasts()
  const onSubmit = async value => addToast('Saved Successfully', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 3000 })
  return <Button primary onClick={onSubmit}>custom notification with animation</Button>
}

const customAnimationStyle = {
  transition: 'opacity 1s',
  opacity: 0,
  width: '300px',
}

const CustomAnimatedToast = ({ appearance, dismissable, children, transitionState, onDismiss, ...props }) => {
  const opacity = transitionState !== 'entered' ? 0 : 1
  const styles = {
    ...customAnimationStyle,
    opacity,
  }

  return (
    <div style={styles}> 
      <Message>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
              <Comment.Actions>
                <Comment.Action>Reply</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Message>
    </div>
  )
}

const App = () => {
  const containerStyle = {
  }
  return (
    <div style={containerStyle}>
      <ToastProvider>
        <StardardToasts />
      </ToastProvider>
      <ToastProvider placement='bottom-right'  components={{ Toast: MyCustomToast }}>
        <FormWithToasts />
      </ToastProvider>
      <ToastProvider placement='bottom-left' components={{ Toast: DismissableToast }}>
        <FormWithDismissableToasts />
      </ToastProvider>
      <ToastProvider placement='bottom-left' components={{ Toast: CustomAnimatedToast }}>
        <AnimatedToasts />
      </ToastProvider>
    </div>
  )
}

export default App
