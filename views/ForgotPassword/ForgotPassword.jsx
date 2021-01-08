import Button from '../../common/components/Button';
import Input from '../../common/components/Input';
import Icon from '../../common/components/Icon';

function ForgotPassword() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '65.8%', height: '400px' }}>
        <img src="/auth-img.jpg" alt="auth-img" height="100%" width="100%" />
      </div>
      <div
        style={{
          width: '31.6%',
          padding: 30,
          borderRadius: '8px',
        }}
        className="Box--Shadow"
      >
        <div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>FORGOT PASSWORD?</div>
            <div className="Font--S14" style={{ lineHeight: 1.5 }}>
              Please enter your Login Id and we will send a new password to your
              registered email id/mobile number.
            </div>
          </div>
          <div style={{ marginTop: 30 }}>
            <div>
              <Input labelText="Login Id" placeholder="Login Id" />
            </div>
          </div>
          <div
            style={{
              paddingTop: 24, display: 'flex', alignItems: 'center', flexDirection: 'column',
            }}
          >
            <Button
              type="primary"
              style={{
                width: '100%', height: 40, borderRadius: 4, fontSize: '0.8rem', fontWeight: 'bold',
              }}
            >
              Send Password
            </Button>
            <div style={{ paddingTop: 30, fontSize: 14 }}>
              Don’t have a registered email id/phone number
            </div>
            <div style={{ display: 'flex', marginTop: '10px', alignItems: 'center' }}>
              <Icon name="call" />
              <span
                className="Primary Font--S14"
                style={{ margin: '0 30px 0 8px' }}
              >
                107-156-5631
              </span>
              <Icon name="email" />
              <span
                className="Primary Font--S14"
                style={{ marginLeft: '8px' }}
              >
                support@zhl.in
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
