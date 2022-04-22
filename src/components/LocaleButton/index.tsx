import React, { createRef, RefObject, useContext } from 'react'
import { localStore } from '../../utils';
import config from '../../utils/config';
import { locales, languageNames } from '../../translations/config';
import { LocaleContext } from '../../context/LocaleContext';
import {
  DropdownContainer,
  DropdownLabel,
  DropdownList,
  DropdownIcon,
  DropdownItem,
  DropdownItemText
} from './styles';
import Icon from '../Icon';

interface ISelectedLocaleProps {
  options: string[];
  currentLocale: string;
  handleLocaleSelect: (selectedLocale: string) => void
}

interface ISelectLocaleState {
  selectedOption: string;
  showDropdown: boolean;
}

class SelectLocaleDropdown extends React.Component<ISelectedLocaleProps, ISelectLocaleState> {
  wrapperRef: RefObject<HTMLDivElement> | any;
  
  state = {
		selectedOption: "",
    showDropdown: false
  }

  constructor(props) {
    super(props);
    this.wrapperRef = createRef()
  }

  componentDidMount() {
    document.addEventListener('mousedown', e => this.handleClickOutside(e));
    const { currentLocale } = this.props;

    if (currentLocale) {
      this.setState({ selectedOption: currentLocale });
    }
  }

  componentDidUpdate() {
    const { currentLocale } = this.props;

    if (this.state.selectedOption !== currentLocale) {
      this.setState({ selectedOption: currentLocale });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', e => this.handleClickOutside(e));
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  toggleDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  }	

	onSelect = (option: string) => {
    this.setState({ selectedOption: option,  });
    this.props.handleLocaleSelect(option);
    this.toggleDropdown();
    
    // TODO: Remove, BAD
    window.location.reload();
	}

  handleClickOutside = (event) => {
    if (this.wrapperRef && this.wrapperRef !== null && this.wrapperRef.current !== null) {
      if (!this.wrapperRef.contains(event.target)) {
        this.toggleDropdown();
      }
    }
  }

	render() {
    const { options } = this.props;
    const { selectedOption, showDropdown } = this.state;

    return (
      <DropdownContainer onClick={() => this.toggleDropdown()}>
				<DropdownLabel>
          <DropdownIcon>
            <Icon name='GlobeIconV2' />
          </DropdownIcon>
          {selectedOption === 'en' &&
            <span className='locale-title'>Eng</span>
          }
          {selectedOption === 'ja' &&
            <span className='locale-title'>日本語</span>
          }
				</DropdownLabel>

        {showDropdown && (
          <DropdownList ref={this.setWrapperRef}>
            {options.map((option: string, index: number) => {
								return (
									<DropdownItem
										onClick={() => this.onSelect(option)}
                    key={`${index}-lang-item`}
									>
                    <DropdownItemText>
                      {languageNames[option]}
                    </DropdownItemText>
									</DropdownItem>
								) 
							})
						}
          </DropdownList>
        )}
      </DropdownContainer>
    )
	}
}

const LocaleButton: React.FC = () => {
  const { locale } = useContext(LocaleContext);

  const handleLocaleChange = React.useCallback(
    (selectedLocale: string) => {
      // const regex = new RegExp(`^/(${locales.join('|')})`)
      localStore.set(config.localStoreKey.locale, selectedLocale);
    },
    []
  )

  return (
    <SelectLocaleDropdown
      currentLocale={locale}
      options={locales}
      handleLocaleSelect={handleLocaleChange}
    />
  )
}

export default LocaleButton;
