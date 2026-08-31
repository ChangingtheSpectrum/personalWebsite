import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledSiteSection = styled.section`
  max-width: 900px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
    display: block;
  }

  .title {
    font-size: var(--fz-xl);
    color: var(--green);
    font-family: var(--font-mono);
    margin-bottom: 20px;
  }

  .description {
    color: var(--slate);
    font-size: var(--fz-lg);
    line-height: 1.5;
    margin-bottom: 30px;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    text-align: left;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .tech-card {
    background-color: var(--light-navy);
    padding: 20px;
    border-radius: var(--border-radius);
    transition: var(--transition);

    &:hover {
      transform: translateY(-5px);
    }

    h4 {
      color: var(--lightest-slate);
      font-size: var(--fz-md);
      margin-bottom: 8px;
      display: flex;
      align-items: center;

      &:before {
        content: '▹';
        color: var(--green);
        margin-right: 8px;
        font-family: var(--font-mono);
      }
    }

    p {
      color: var(--slate);
      font-size: var(--fz-sm);
      margin: 0;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const AboutSite = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const features = [
    {
      title: 'Cloud Kubernetes',
      description: 'Hosted on a self-managed, production-ready Kubernetes cluster.',
    },
    {
      title: 'Automated TLS',
      description: 'SSL/TLS certificates automatically issued and renewed via cert-manager.',
    },
    {
      title: 'Observability',
      description: 'Cluster health, traffic, and metrics monitored with Prometheus & Grafana.',
    },
    {
      title: 'CI/CD Pipeline',
      description:
        'Automated build, test, and zero-downtime deployment workflows powered by Jenkins.',
    },
  ];

  return (
    <StyledSiteSection id="nerd" ref={revealContainer}>
      <div className="inner">
        <StyledText>
          <h2 className="numbered-heading">About This Site</h2>
          <p>Just a few details about this site and how it's built/maintained:</p>

          <div className="tech-grid">
            {features.map((item, i) => (
              <div className="tech-card" key={i}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </StyledText>
      </div>
    </StyledSiteSection>
  );
};

export default AboutSite;
