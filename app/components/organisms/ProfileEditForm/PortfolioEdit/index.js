import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import FormikInput from 'components/molecules/FormikInput';
import FormikTextArea from 'components/molecules/FormikTextArea';
import { Form, FieldArray, Formik } from 'formik';
import * as Yup from 'yup';
import Button from 'components/molecules/Button';
import isEmpty from 'lodash/isEmpty';
import BaseIcon from 'components/atoms/BaseIcon';
import get from 'lodash/get';
import { wordCount } from 'utils/helper';
import FileUpload from 'components/molecules/DragDrop/file2';

const PortfolioFormCard = ({
  errors,
  touched,
  handleChange,
  onRemove,
  setImage,
  onCancel,
  ...portfolio
}) => {
  const getError = key =>
    key && errors[key] && touched[key] ? errors[key] : null;
  const fromRef = useRef();

  const removeProps = {
    iconDescription: 'Remove',
    alignContent: 'center',
    kind: 'danger',
    size: '15xl',
    type: 'button',
    height: 'H($lg)',
    roundCorners: false,
    postIcon: 'remove',
  };
  const changeFrom = useCallback(
    e => {
      const reg = new RegExp(/^(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/);
      handleChange(e);
      console.log(fromRef.current, 'THIS IS ITT');
      if (reg.test(portfolio.from)) fromRef.current.focus();
    },
    [fromRef.current],
  );
  return (
    <div className="Pos(r) Trsdu(0.8s) Trsp(a) Trstf(e) Mah($45x) Ov(s) P($lg)">
      <div className="D(f) Ai(c) Jc(sb)">
        <FormikInput
          label="Project name"
          dimensionClasses="W($xmd) H($2xl)"
          name={`project`}
          id={`project`}
          error={getError('project')}
          value={portfolio.project}
          onChange={handleChange}
        />
        <FormikInput
          dimensionClasses="W($xmd) H($2xl) Mstart($2xl)"
          name={`client`}
          id={`client`}
          label="Client"
          error={getError('client')}
          value={portfolio.client}
          onChange={handleChange}
        />
      </div>
      <div
        className="D(f) Ai(c) Jc(s) Bgc($navBarBg) W(fc) H($2xl) My($lg) Bdrs($bdrsinput) Bdb($bdinputGrey)"
        style={{ boxSizing: 'initial' }}
      >
        <FormikInput
          label="From"
          name={`from`}
          placeholder="mm/yyyy"
          id={`from`}
          autoComplete="off"
          dimensionClasses="W($11xl) H($2xl)"
          error={getError('from')}
          value={portfolio.from}
          onChange={handleChange}
          joined={true}
        />
        <BaseIcon
          icon="arrowback"
          iconClasses="W($md) H($md) Rotate(180deg) C($inputGrey)"
        />
        <FormikInput
          label="To"
          name={`to`}
          ref={fromRef}
          placeholder="mm/yyyy"
          id={`to`}
          autoComplete="off"
          dimensionClasses="W($11xl) H($2xl)"
          error={getError('to')}
          value={portfolio.to}
          onChange={handleChange}
          joined={true}
        />
      </div>
      <FormikTextArea
        label="Description"
        name={`description`}
        id="description"
        heightClass="H($5xl)"
        placeholder="Brief description of your work"
        dimensionClasses="W($full) My($lg)"
        onChange={handleChange}
        value={portfolio.description}
        error={getError('description')}
      />
      <div className="Fz($smx) Lh(1) Ff($ffmanrope)">Add Files</div>
      <FileUpload
        multiple={true}
        name="example-upload"
        maxSize={10}
        filesExisting={portfolio.images}
        onChange={setImage}
      />
      <Button
        {...removeProps}
        // onClick={setTimeout(, 300)}
        onClick={onRemove}
      >
        Remove Project
      </Button>
    </div>
  );
};

const PortfolioEditForm = ({
  onCancel,
  data: portfolio,
  currentIndex,
  onSave,
}) => {
  const validationSchema = Yup.object().shape({
    project: Yup.string()
      .min(3, 'too short')
      .required('Required'),
    client: Yup.string().required('Required'),
    from: Yup.string()
      .matches(/^(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/, 'Enter valid date mm/yyyy')
      .required('Required'),
    to: Yup.string()
      .matches(/^(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/, 'Enter valid date mm/yyyy')
      .required('Required'),
    description: Yup.string()
      .required('Required')
      .test('word-count-limit', 'Min 5 words and Max 100 words', value => {
        if (!value) return false;
        const l = wordCount(value);
        return l >= 5 && l <= 100;
      }),
  });

  const emptyPortfolio = {
    project: '',
    client: '',
    from: '',
    to: '',
    description: '',
    images: [],
  };
  const initialValues =
    currentIndex === 0 || currentIndex
      ? { ...portfolio[currentIndex] }
      : emptyPortfolio;

  const [forward, setForward] = useState(true);
  const onRemove = () => {
    if (currentIndex >= 0) {
      const newPortfolio = portfolio.filter((obj, i) => i !== currentIndex);
      onSave({ portfolio: newPortfolio });
      onCancel();
    }
  };

  const activeSaveProps = {
    iconDescription: 'Save',
    alignContent: 'center',
    kind: 'primary',
    size: 'half',
    type: 'submit',
    roundCorners: false,
  };

  const cancelProps = {
    iconDescription: 'Cancel',
    alignContent: 'center',
    kind: 'tertiary',
    size: 'half',
    type: 'button',
    roundCorners: false,
    onClick: onCancel,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values));
        const index = currentIndex >= 0 ? currentIndex : portfolio.length;
        let newPortfolio = [...portfolio];
        newPortfolio[index] = values;
        onSave({ portfolio: newPortfolio });
        setSubmitting(false);
        onCancel();
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        touched,
        errors,
        setFieldValue,
      }) => (
        <div className="Bdrs($xs) Bgc(white)">
          <Form onSubmit={handleSubmit}>
            <>
              <div className="Fz($mmd) Lh(1) Px($lg) Py($xss) Bdb($bdcardGrey) Ff($ffmanrope) H($2xl)">
                Edit Portfolio
              </div>
              <div>{values.images.length}</div>
              <PortfolioFormCard
                {...values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                onRemove={onRemove}
                onCancel={onCancel}
                setImage={v => {
                  // let oldImages = values.images;
                  // if (index < oldImages.length && index >= 0) {
                  //   oldImages[index] = v;
                  // } else if (index === oldImages.length) {
                  //   oldImages.push(v);
                  // }
                  setFieldValue('images', v);
                }}
              />
              <div className="D(f) Ai(c) Jc(c) Bdt($bdcardGrey)">
                <Button {...cancelProps}>Cancel</Button>
                <Button
                  {...activeSaveProps}
                  // disabled={values.length === 0}
                >
                  Save
                </Button>
              </div>
            </>
          </Form>
        </div>
      )}
    </Formik>
  );
};

PortfolioEditForm.propTypes = {
  onCancel: PropTypes.func,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.array,
};

PortfolioEditForm.defaultProps = {
  onCancel: () => {},
  data: [],
};

export default PortfolioEditForm;
