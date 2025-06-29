export default function Alert({ type, message }) {
  const getIcon = () => {
    switch (type) {
      case 'error':
        return 'fas fa-exclamation-triangle'
      case 'success':
        return 'fas fa-check-circle'
      case 'info':
        return 'fas fa-info-circle'
      default:
        return 'fas fa-info-circle'
    }
  }

  return (
    <div className={`alert alert-${type}`}>
      <i className={getIcon()}></i>
      {message}
    </div>
  )
}
