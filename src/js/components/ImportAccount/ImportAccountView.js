import React from "react";
import {
  ImportKeystore,
  ImportByDevice,
  ImportByPrivateKey,
  ImportByMetamask,
  ImportByDeviceWithLedger,
  ImportByDeviceWithTrezor,
  ImportByPromoCode
} from "../../containers/ImportAccount";

const ImportAccountView = (props) => {
  var isOnMobile = props.onMobile.isIOS || props.onMobile.isAndroid;
  const importInactiveClass = !props.isAgreedTermOfService ? 'import-account__item--inactive' : '';

  return (
    <div className="import-account">
      <div className="import-account__choose-wallet-container container">
        {props.isAgreedTermOfService && (
          <h1 className="import-account__title">{ props.tradeType === "swap" ?
            props.translate("address.connect_your_wallet_to_swap") || "Connect your Wallet to Swap" : 
            props.translate("address.connect_your_wallet_to_transfer") || "Connect your Wallet to Transfer"}
          </h1>
        )}

        <div className={`import-account__content ${isOnMobile ? ' import-account__content--mobile' : ''}`}>
          {!isOnMobile &&
          <div className={`import-account__item ${importInactiveClass}`}>
            <ImportByMetamask/>
          </div>
          }

          {!isOnMobile &&
          <div className={`import-account__item import-account__item-trezor ${importInactiveClass}`}>
            <ImportByDeviceWithTrezor/>
          </div>
          }

          {!isOnMobile &&
          <div className={`import-account__item import-account__item-ledger ${importInactiveClass}`}>
            <ImportByDeviceWithLedger/>
          </div>
          }

          {!isOnMobile &&
          <div className={`import-account__item ${importInactiveClass}`}>
            <ImportKeystore/>
          </div>
          }

          {isOnMobile &&
          <div className="import-account__item download-app">
            <div className={"import-account__block"}>
              <div className={"import-account__block-left"}>
                <div className="import-account__icon kyberapp"/>
                <div>
                  <div className="import-account__name">KYBERSWAP APP</div>
                  <div className="import-account__desc">Ethereum Wallet & DApp</div>
                </div>
              </div>
              <a
                className="import-account__block-right"
                href={"https://docs.google.com/forms/d/e/1FAIpQLSeHmkoi5TQ8gGvmrhzg7RzRZQNlEDBR_Gqb67uB6M92V10rpQ/viewform"}
                target="_blank"
              >
                {props.translate("address.register_beta") || "Register Beta"}
              </a>
            </div>
          </div>
          }

          <div className={`import-account__item ${importInactiveClass}`}>
            <ImportByPrivateKey isOnMobile={isOnMobile}/>
          </div>

          <div className={`import-account__item ${importInactiveClass}`}>
            <ImportByPromoCode isOnMobile={isOnMobile}/>
          </div>
        </div>
      </div>
      {props.errorModal}
    </div>
  )
}

export default ImportAccountView
