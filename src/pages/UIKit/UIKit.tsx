import React, { useState } from 'react';
import styles from './UIKit.module.css';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import CheckBox from '../../components/CheckBox/CheckBox';
import Card from '../../components/Card/Card';
import MultiDropdown, { Option } from '../../components/MultiDropdown/MultiDropdown';
import ArrowDownIcon from '../../components/icons/ArrowDownIcon/ArrowDownIcon';

const UIKit: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

    const options: Option[] = [
        { key: 'msk', value: 'Москва' },
        { key: 'spb', value: 'Санкт-Петербург' },
        { key: 'ekb', value: 'Екатеринбург' }
    ];

    return (
        <div className={styles.page}>
            <section id="buttons" className={styles.section}>
                <Text tag="h2" view="title" className={styles.sectionTitle}>
                    Buttons
                </Text>
                <div className={styles.componentShowcase}>
                    <Text tag="h3" view="p-18" weight="medium" className={styles.componentTitle}>
                        Default Button
                    </Text>
                    <div className={styles.componentGrid}>
                        <div className={styles.componentCard}>
                            <Button>Default Button</Button>
                            <Text view="p-14" className={styles.componentDescription}>
                                Standard button with default styling
                            </Text>
                        </div>
                        <div className={styles.componentCard}>
                            <Button disabled>Disabled Button</Button>
                            <Text view="p-14" className={styles.componentDescription}>
                                Button in disabled state
                            </Text>
                        </div>
                        <div className={styles.componentCard}>
                            <Button loading>Loading Button</Button>
                            <Text view="p-14" className={styles.componentDescription}>
                                Button with loading state
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            <section id="inputs" className={styles.section}>
                <Text tag="h2" view="title" className={styles.sectionTitle}>
                    Inputs
                </Text>
                <div className={styles.componentShowcase}>
                    <Text tag="h3" view="p-18" weight="medium" className={styles.componentTitle}>
                        Text Input
                    </Text>
                    <div className={styles.componentGrid}>
                        <div className={styles.componentCard}>
                            <Input
                                value={inputValue}
                                onChange={setInputValue}
                                placeholder="Enter text..."
                            />
                            <Text view="p-14" className={styles.componentDescription}>
                                Standard text input
                            </Text>
                        </div>
                        <div className={styles.componentCard}>
                            <Input
                                value=""
                                onChange={() => {}}
                                placeholder="Disabled input"
                                disabled
                            />
                            <Text view="p-14" className={styles.componentDescription}>
                                Disabled input field
                            </Text>
                        </div>
                        <div className={styles.componentCard}>
                            <Input
                                value="With icon"
                                onChange={() => {}}
                                afterSlot={<ArrowDownIcon color="secondary" />}
                            />
                            <Text view="p-14" className={styles.componentDescription}>
                                Input with icon
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            <section id="checkboxes" className={styles.section}>
                <Text tag="h2" view="title" className={styles.sectionTitle}>
                    Checkboxes
                </Text>
                <div className={styles.componentShowcase}>
                    <Text tag="h3" view="p-18" weight="medium" className={styles.componentTitle}>
                        Checkbox
                    </Text>
                    <div className={styles.componentGrid}>
                        <div className={styles.componentCard}>
                            <CheckBox
                                checked={checked}
                                onChange={setChecked}
                            />
                            <Text view="p-14" className={styles.componentDescription}>
                                Standard checkbox
                            </Text>
                        </div>
                        <div className={styles.componentCard}>
                            <CheckBox
                                checked={false}
                                onChange={() => {}}
                                disabled
                            />
                            <Text view="p-14" className={styles.componentDescription}>
                                Disabled checkbox
                            </Text>
                        </div>
                    </div>
                </div>
            </section>

            <section id="cards" className={styles.section}>
                <Text tag="h2" view="title" className={styles.sectionTitle}>
                    Cards
                </Text>
                <div className={styles.componentShowcase}>
                    <Text tag="h3" view="p-18" weight="medium" className={styles.componentTitle}>
                        Product Card
                    </Text>
                    <div className={styles.componentGrid}>
                        <Card
                            image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                            title="Product Name"
                            subtitle="Product Description"
                            onClick={() => console.log('Card clicked')}
                        />
                        <Card
                            image="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
                            title="Product with Price"
                            subtitle="Product Description"
                            contentSlot={<Text view="p-18" weight="medium">299р</Text>}
                            actionSlot={<Button>Add to Cart</Button>}
                        />
                    </div>
                </div>
            </section>

            <section id="dropdowns" className={styles.section}>
                <Text tag="h2" view="title" className={styles.sectionTitle}>
                    Dropdowns
                </Text>
                <div className={styles.componentShowcase}>
                    <Text tag="h3" view="p-18" weight="medium" className={styles.componentTitle}>
                        Multi Select Dropdown
                    </Text>
                    <div className={styles.componentGrid}>
                        <div className={styles.componentCard}>
                            <MultiDropdown
                                options={options}
                                value={selectedOptions}
                                onChange={setSelectedOptions}
                                getTitle={(values) => values.length === 0 ? 'Select cities' : `Selected: ${values.length}`}
                            />
                            <Text view="p-14" className={styles.componentDescription}>
                                Multi-select dropdown
                            </Text>
                        </div>
                        <div className={styles.componentCard}>
                            <MultiDropdown
                                options={options}
                                value={[]}
                                onChange={() => {}}
                                disabled
                                getTitle={() => 'Disabled dropdown'}
                            />
                            <Text view="p-14" className={styles.componentDescription}>
                                Disabled dropdown
                            </Text>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UIKit; 