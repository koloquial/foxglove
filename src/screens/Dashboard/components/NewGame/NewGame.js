import React, { useState, useRef, useEffect } from 'react';

//Styles
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

//Functions
import { hash } from '../../../../requests/hash.js';

//Authentication
import { useAuth } from '../../../../authentication/AuthContext';

//Store
import { setLoading, setLoadingMessage } from '../../../../store/features/loadingSlice';
import { setReality } from '../../../../store/features/accountSlice';

//
import { addReality } from '../../../../requests/addReality';

const NewGame = () => {
  const [error, setError] = useState();
  const [root, setRoot] = useState([]);
  const [possibility, setPossibility] = useState('');
  const [step, setStep] = useState(1);
  const [time, setTime] = useState(new Date);
  const [sync, setSync] = useState(true);
  const [status, setStatus] = useState('unstable');
  const [glossaryA, setGlossaryA] = useState([]);
  const [glossaryB, setGlossaryB] = useState([]);
  const [sumOne, setSumOne] = useState(0);
  const [sumTwo, setSumTwo] = useState(0);

  const awarenessRef = useRef('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useAuth();

  const handleStepOne = event => {
    event.preventDefault();

    if (awarenessRef.current.value !== '') {
      dispatch(setLoading(true));
      dispatch(setLoadingMessage('mapping probabilities'))
      hash({ awareness: awarenessRef.current.value })
        .then(res => {
          let temp = [];
          let temp2 = [];

          const rootSize = 8;
          for (let i = 0; i < res.length; i += rootSize) {
            const stem = res.slice(i, i + rootSize);
            temp.push(stem);
            temp2.push(`${stem[0]}${stem[1]}:${stem[3]}${stem[5]}:${stem[7]}`);
          }

          setRoot(temp);
          setGlossaryA(temp2);
          setStep(2);
          dispatch(setLoading(false));
        });
    }
  }

  const handleStepTwo = stem => {
    setPossibility(stem);

    let glossASum = generateSum(glossaryA);
    let glossBSum = generateSum(glossaryB);

    setSumOne(glossASum);
    setSumTwo(glossBSum);

    setStep(3);
  }

  const removeIndex = (glossary, index) => {
    let glossA = [...glossaryA]
    let glossB = [...glossaryB]
    let value;

    if (glossary === 'a') {
      value = glossA.splice(index, 1);
      glossB.push(value[0]);
    } else {
      value = glossB.splice(index, 1);
      glossA.push(value[0]);
    }

    let glossASum = generateSum(glossA);
    let glossBSum = generateSum(glossB);

    setSumOne(glossASum);
    setSumTwo(glossBSum);

    setGlossaryA(glossA);
    setGlossaryB(glossB);

    //add status logic
  }

  const generateSum = glossary => {
    let sum = 0;
    glossary.forEach((item, index) => {
      let split = item.split(':');

      split.forEach(entry => {
        let temp = parseInt(item[0]);

        let temp2;
        if (entry.length === 2) {
          temp2 = parseInt(item[1]);
        }

        if (!!temp) {
          sum += parseInt(item[0]);
        } else {
          sum -= index;
        }

        if (!!temp2) {
          sum -= parseInt(item[1]);
          sum += index;
        }
      })
    });
    return sum;
  }

  const startGame = () => {
    const newReality = {
      uid: currentUser.uid,
      awareness: root,
      possibility,
      glossary: [glossaryA, glossaryB],
    }

    dispatch(setLoading(true));
    dispatch(setLoadingMessage('projecting'))
    dispatch(setReality(newReality));
    addReality(newReality)
      .then(res => {
        navigate('/');
        dispatch(setLoading(false));
      })
  }

  const denature = () => {
    setStep(1);
    setSync(false);
    setGlossaryA([]);
    setGlossaryB([]);
  }

  useEffect(() => {
    if (sync) {
      setTimeout(() => setTime(new Date), 1000);
    }
  }, [time]);

  return (
    <div className='container'>
      {step === 1 ?
        <>
          <p className='interface-text head'>
            | conception <br />
          </p>

          <p className='interface-text prompt'>
            ! identify awareness
          </p><br />

          <Form onSubmit={handleStepOne}>
            <Form.Group id='awareness'>
              <Form.Control className='input' type='text' ref={awarenessRef} placeholder={''} required />
            </Form.Group>
            <div className='low-confirm'>
              <Button className='button' type='submit'>Emit</Button>
            </div>
          </Form>
        </> : <></>}

      {step === 2 ?
        <>
          <p className='interface-text head'>
            | conception <br />
          </p>

          <p className='interface-text prompt'>
            ! measure possibility
          </p>

          <br />
          <Row>
            <Col>
              {root.map((stem, index) => {
                if (index < 4) {
                  return (
                    <div key={`root-${index}`}>
                      <p className='interface-text'>
                        <a href='#' onClick={() => handleStepTwo(stem, index)}>
                          > {stem.toLowerCase()}
                        </a>
                      </p>
                      <br />
                    </div>)
                }
              })}
            </Col>
            <Col>
              {root.map((stem, index) => {
                if (index >= 4) {
                  return (
                    <div key={`root-${index}`}>
                      <p className='interface-text'>
                        <a href='#' onClick={() => handleStepTwo(stem, index)}>
                          > {stem.toLowerCase()}
                        </a>
                      </p>
                      <br />
                    </div>)
                }
              })}
            </Col>
          </Row>
        </> : <></>}

      {step === 3 ?
        <>
          <p className='interface-text head'>
            | conception <br />
          </p>

          <p className='interface-text prompt'>
            ! abstract dissonance
          </p>
          <br />

          <p className='interface-text info'>
            # {status}<br />
          </p>

          <Row>
            <Col>
              <p className='interface-text'>: {sumOne}%</p><br />
              {glossaryA.map((item, index) => {
                return (
                  <div key={`glossaryA-${index}`}>
                    <p className='interface-text'>
                      <a href='#' onClick={() => removeIndex('a', index)}>
                        > {item}
                      </a>
                    </p>
                    <br />
                  </div>)
              })}
            </Col>
            <Col>
              <p className='interface-text'>: {sumTwo}%</p><br />
              {glossaryB.map((item, index) => {
                return (
                  <div key={`glossaryB-${index}`}>
                    <p className='interface-text'>
                      <a href='#' onClick={() => removeIndex('b', index)}>
                        > {item}
                      </a>
                    </p>
                    <br />
                  </div>)
              })}
            </Col>
          </Row>
          <br />
          <div className='low-confirm'>
            <Button className='button' onClick={() => {
              setStep(4)
            }}>Describe</Button>
          </div>
        </> : <></>}

      {step === 4 ?
        <>
          <p className='interface-text head'>
            | conception <br />
          </p>

          <p className='interface-text prompt'>
            ! interpret pattern
          </p>
          <Row>
            <Col>
              <p className='interface-text info'>
                # awareness
              </p>
              <br />
              {root.map((item, index) => {
                return (
                  <div key={`root-final-${index}`}>
                    <p className='interface-text'>{item}</p>
                    <br />
                  </div>)
              })}
            </Col>

            <Col>
              <p className='interface-text info'>
                # glossary <br />
              </p>
              {glossaryA.map((item, index) => {
                return (
                  <div key={`final-glossaryA-${index}`}>
                    <p className='interface-text'>{item}</p>
                    <br />
                  </div>)
              })}
              {glossaryB.map((item, index) => {
                return (
                  <div key={`final-glossaryA-${index}`}>
                    <p className='interface-text'>{item}</p>
                    <br /></div>)
              })}
            </Col>
          </Row>

          <p className='interface-text prompt'>
            ! string reality
          </p>

          <div className='low-confirm'>
            <Button className='button' onClick={startGame}>Renderform</Button>
            <Button className='button' onClick={denature}>Denature</Button>
          </div>
        </> : <></>
      }
    </div >
  )
}

export default NewGame;